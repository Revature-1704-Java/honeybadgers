package com.revature.beans;

public class Test {
  private String name;
  private String type;

  public Test() {
    super();
  }

  public Test(String name, String type) {
    this.name = name;
    this.type = type;
  }

  public void setType(String type) {
    this.type = type;
  }
  public String getType() {
    return this.type;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getName() {
    return this.name;
  }
}
