package com.revature.application.controller;

import com.revature.dao.*;
import com.revature.beans.*;

import java.util.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
	
  @RequestMapping(value="/{username}", method=RequestMethod.GET)
  public ResponseEntity getUser(@PathVariable String username) {
    UsersDao usersDao = new UsersDao();
    Users user = usersDao.getUser(username);
    HttpHeaders responseHeaders = new HttpHeaders();
    if(user == null) {
      return new ResponseEntity(user, responseHeaders, HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity(user, responseHeaders, HttpStatus.ACCEPTED);
  }

  @PostMapping()
  public ResponseEntity postUser(@RequestBody Users input) {
    Users user = input;
    UsersDao usersDao = new UsersDao();
    Users dbUser = usersDao.getUser(user.getUsername());
    HttpHeaders responseHeaders = new HttpHeaders();
    if(dbUser != null) {
      return new ResponseEntity(null, responseHeaders, HttpStatus.CONFLICT);
    }
    usersDao.saveUser(user);

    dbUser = usersDao.getUser(user.getUsername());
    if(dbUser == null) {
      return new ResponseEntity(dbUser, responseHeaders, HttpStatus.CONFLICT);
    }
    return new ResponseEntity(dbUser, responseHeaders, HttpStatus.ACCEPTED);
  }
  //@CrossOrigin(origins = "http://localhost:8181")
  @RequestMapping(value="/{username}", method=RequestMethod.PUT)
  public ResponseEntity updateUser(@RequestBody List<UserAuth> input, @PathVariable String username) {
    List<UserAuth> listUser = input;
    UsersDao usersDao = new UsersDao();
    UserAuth currentUser = usersDao.getUserandPass(username);
    HttpHeaders responseHeaders = new HttpHeaders();
    if(currentUser == null) {
      return new ResponseEntity("Resource not found", responseHeaders, HttpStatus.NOT_FOUND);
    }
    else if(listUser.get(0).getPassword().equals(currentUser.getPassword())) {
    	currentUser.setPassword(input.get(1).getPassword());
		Users updatedUser = usersDao.getUser(username);
		updatedUser.setPassword(listUser.get(1).getPassword());
		usersDao.updateUser(updatedUser);
		return new ResponseEntity(currentUser, responseHeaders, HttpStatus.OK);
    } else {
		return new ResponseEntity("current password entered incorrectly", responseHeaders, HttpStatus.UNAUTHORIZED);

    }
  }

  @RequestMapping(value="/{username}/answeredQuestions", method=RequestMethod.POST)
  public ResponseEntity getUsersAnsweredQuestions(@PathVariable String username, @RequestBody List<AnsweredQuestions> answeredQuestions) {
    AnsweredQuestionsDao answeredQuestionsDao = new AnsweredQuestionsDao();
    UsersDao usersDao = new UsersDao();
    Users user = usersDao.getUser(username);
    HttpHeaders responseHeaders = new HttpHeaders();

    if(user == null) {
      return new ResponseEntity(user, responseHeaders, HttpStatus.NOT_FOUND);
    }
    for(AnsweredQuestions aq : answeredQuestions) {
      aq.setId(user);
      if(answeredQuestionsDao.getAedQWithUserandQuestion(user, aq.getQid())== null) {
    	  	answeredQuestionsDao.saveAnsweredQuestion(aq);
      } else {
    	  	AnsweredQuestions updateAQ = answeredQuestionsDao.getAedQWithUserandQuestion(user, aq.getQid());
    	  	updateAQ.setSuccess(aq.isSuccess());
    	  	answeredQuestionsDao.updateAnsweredQuestion(updateAQ);    	  	
      }
    }

    if(answeredQuestions == null) {
      return new ResponseEntity("No questions with that id", responseHeaders, HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity(answeredQuestions, responseHeaders, HttpStatus.ACCEPTED);
  }

  @RequestMapping(value="/{username}/answeredQuestions", method=RequestMethod.GET)
  public ResponseEntity getUsersAnsweredQuestions(@PathVariable String username) {
    AnsweredQuestionsDao answeredQuestionsDao = new AnsweredQuestionsDao();
    UsersDao usersDao = new UsersDao();
    Users user = usersDao.getUser(username);
    HttpHeaders responseHeaders = new HttpHeaders();

    if(user == null) {
      return new ResponseEntity(user, responseHeaders, HttpStatus.NOT_FOUND);
    }
    List<AnsweredQuestions> answeredQuestions = answeredQuestionsDao.getUsersAedQ(user);
    if(answeredQuestions == null) {
      return new ResponseEntity("No questions with that id", responseHeaders, HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity(answeredQuestions, responseHeaders, HttpStatus.ACCEPTED);
  }
  @RequestMapping(value="/{username}/questions", method=RequestMethod.GET)
  public ResponseEntity getUsersQuestions(@PathVariable String username) {
    QuestionsDao questionsDao = new QuestionsDao();
    UsersDao usersDao = new UsersDao();
    Users user = usersDao.getUser(username);
    HttpHeaders responseHeaders = new HttpHeaders();

    if(user == null) {
      return new ResponseEntity(user, responseHeaders, HttpStatus.NOT_FOUND);
    }
    List<Questions> questions = questionsDao.getQuestionByUser(user.getId());
    if(questions == null) {
      return new ResponseEntity("No questions with that id", responseHeaders, HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity(questions, responseHeaders, HttpStatus.ACCEPTED);
  }


}
