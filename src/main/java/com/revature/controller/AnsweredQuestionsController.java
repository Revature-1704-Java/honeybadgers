package com.revature.application.controller;

import com.revature.dao.*;
import com.revature.beans.*;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import java.util.*;

@RestController
@CrossOrigin
@RequestMapping("/answeredQuestion")
public class AnsweredQuestionsController {
  @RequestMapping(method=RequestMethod.POST)
  public ResponseEntity getAnsweredQuestionByUsername(@RequestParam("username") String username, @RequestBody List<AnsweredQuestions> answeredQuestions) {
    AnsweredQuestionsDao answeredQuestionsDao = new AnsweredQuestionsDao();
    UsersDao usersDao = new UsersDao();
    Users user = usersDao.getUser(username);
    HttpHeaders responseHeaders = new HttpHeaders();

    if(user == null) {
      return new ResponseEntity(user, responseHeaders, HttpStatus.NOT_FOUND);
    }
    for(AnsweredQuestions aq : answeredQuestions) {
      aq.setId(user);
      answeredQuestionsDao.saveAnsweredQuestion(aq);
    }

    if(answeredQuestions == null) {
      return new ResponseEntity("No questions with that id", responseHeaders, HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity(answeredQuestions, responseHeaders, HttpStatus.ACCEPTED);
  }

}
