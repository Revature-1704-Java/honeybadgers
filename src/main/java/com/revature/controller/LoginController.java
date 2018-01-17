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

@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {
	
  @PostMapping()
  public ResponseEntity postUser(@RequestBody Users input) {
    Users user = input;
    UsersDao usersDao = new UsersDao();
    HttpHeaders responseHeaders = new HttpHeaders();
    if(user.getUsername() == null) {
      return new ResponseEntity("user username is null", responseHeaders, HttpStatus.BAD_REQUEST);
    }
    Users inDb = usersDao.getUser(user.getUsername());
    if(inDb == null) {
      return new ResponseEntity(inDb, responseHeaders, HttpStatus.UNAUTHORIZED);
    }
    return new ResponseEntity(inDb, responseHeaders, HttpStatus.ACCEPTED);
  }

}
