package com.revature.application.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import com.revature.beans.Test;
@RestController
@RequestMapping("/header")
public class HeaderController {
	
  @GetMapping
  public ResponseEntity getHeaderTest() {
    HttpHeaders responseHeaders = new HttpHeaders();
    responseHeaders.setUpgrade("kappa");
    return new ResponseEntity("Kappa found", responseHeaders, HttpStatus.ACCEPTED);
  }

  @GetMapping(headers = "Accept=application/json")
  public ResponseEntity getHeaderTestJsonHeader() {
    HttpHeaders responseHeaders = new HttpHeaders();
    responseHeaders.setUpgrade("kappaJson");
    return new ResponseEntity("Kappa Json found", responseHeaders, HttpStatus.ACCEPTED);
  }
}
