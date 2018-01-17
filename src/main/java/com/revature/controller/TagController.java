package com.revature.application.controller;

import com.revature.dao.*;
import com.revature.beans.*;
import java.util.List;

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
@RequestMapping("/tag")
public class TagController {
	
  @GetMapping
  public ResponseEntity getTags() {
    TagsDao tagsDao = new TagsDao();
    List<Tags> tags = tagsDao.getAllTags();
    HttpHeaders responseHeaders = new HttpHeaders();
    if(tags == null || tags.size()==0) {
      return new ResponseEntity(null, responseHeaders, HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity(tags, responseHeaders, HttpStatus.OK);
  }

}
