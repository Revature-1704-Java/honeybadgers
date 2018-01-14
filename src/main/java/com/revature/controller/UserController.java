package com.revature.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
	
  @GetMapping
	public String getUserCollection() {
		return "Collection of users available";
	}

  @PostMapping
  public String postToUserCollection() {
    return "Posted to user collection";
  }

}
