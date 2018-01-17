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
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import java.util.*;

@RestController
@CrossOrigin
@RequestMapping("/quiz")
public class QuizController {
	
  @RequestMapping(value="/{tagname}", method=RequestMethod.GET)
  public ResponseEntity getTenQuestionQuiz(@PathVariable String tagname) {
    QuestionsDao questionsDao = new QuestionsDao();
    List<Questions> questions = questionsDao.getTenQuestion(tagname);
    HttpHeaders responseHeaders = new HttpHeaders();
    if(questions == null) {
      return new ResponseEntity("No questions with that tagname", responseHeaders, HttpStatus.NOT_FOUND);
    }
    if(questions.size() < 10) {
      return new ResponseEntity("Not enough questions with that tagname", responseHeaders, HttpStatus.SERVICE_UNAVAILABLE);
    }
    return new ResponseEntity(questions, responseHeaders, HttpStatus.ACCEPTED);
  }

}
