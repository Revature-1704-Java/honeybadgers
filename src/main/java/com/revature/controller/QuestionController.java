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
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import java.util.*;

@RestController
@RequestMapping("/question")
public class QuestionController {
  @RequestMapping(value="/{id}", method=RequestMethod.GET)
  public ResponseEntity getQuestion(@PathVariable int id) {
    QuestionsDao questionsDao = new QuestionsDao();
    Questions questions = questionsDao.getQuestion(id);
    HttpHeaders responseHeaders = new HttpHeaders();
    if(questions == null) {
      return new ResponseEntity("No questions with that id", responseHeaders, HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity(questions, responseHeaders, HttpStatus.ACCEPTED);
  }

  @PostMapping
  public ResponseEntity postQuestion(@RequestBody Questions input) {
    Questions question = input;
    Tags tag = question.getTags();
    TagsDao tagsDao = new TagsDao();
    QuestionsDao questionsDao = new QuestionsDao();
    if(tagsDao.getTagByString(tag.getTagName()) == null) {
    		tagsDao.saveTag(tag);
    } else {
    		tag = tagsDao.getTagByString(tag.getTagName());
    }
    question.setTags(tag);
    List<Responses> responses = question.getAnswers();
    for(Responses response : responses) {
      response.setQid(question);
    }
    question.setAnswers(responses);
     /*for(int i = 0; i < question.getResponses().size(); i++) {
      question.getResponses().get(i).setQid(question);
     }
    */ 
    questionsDao.saveQuestion(question);
    Questions dbQuestion = questionsDao.getQuestion(question.getQuestion());

    HttpHeaders responseHeaders = new HttpHeaders();
    return new ResponseEntity(dbQuestion, responseHeaders, HttpStatus.ACCEPTED);
  }
}
