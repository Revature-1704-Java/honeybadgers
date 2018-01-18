package com.revature.service;

import java.util.*;
public class ProfanityFilterService {

  private ArrayList<String> profanities;

  public ProfanityFilterService() {
    super();
    profanities = new ArrayList<String>();
    profanities.add("fuck");
    profanities.add("shit");
    profanities.add("nigga");
    profanities.add("nigger");
    profanities.add("nigg");
    profanities.add("bitch");
    profanities.add("dick");
    profanities.add("penis");
    profanities.add("cunt");
    profanities.add("pussy");
    profanities.add("vagina");
    profanities.add("damn");
    profanities.add("damnit");
    profanities.add("bastard");
    profanities.add("kike");
    profanities.add("chink");
    profanities.add("whore");
    profanities.add("cock");
    profanities.add("suck");
    profanities.add("asshole");
    profanities.add("fag");
  }

  public boolean isProfane(String query) {
    String parsed = query.replaceAll("[^a-zA-Z ]", "").toLowerCase();

    if(profanities.contains(parsed)) return true;
    boolean hasProfane = false;
    for(String profanity : profanities) {
      if(parsed.contains(profanity)) {
        hasProfane = true;
        return hasProfane;
      }
    }
    return hasProfane;
  } 

}

