package com.revature.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.FetchType;

@Entity
@Table(name="Users")
public class Users {	
	
	public Users(String username, String password) {
		this.username = username;
		this.password = password;
	}
	
	public Users(String username, String password, boolean admin) {
		this.username = username;
		this.password = password;
		this.admin = admin;
	}
	
	public Users() {}
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="userSeq")
	@SequenceGenerator(allocationSize=1, name="userSeq", sequenceName="USER_SEQ")	
	@Column(name="userid")
	private int userid;
	
	@Column(name="username", unique=true)
	private String username;
	
	@Column(name="upassword")
	private String password;
	
	@Column(name="admin")
	private boolean admin;
	
//	@OneToMany(mappedBy="uid")
	@OneToMany(fetch=FetchType.EAGER)
	List<AnsweredQuestions> aedq;
	
	@OneToMany(fetch=FetchType.EAGER)
	List<Tags> createdTags;
	
	public List<AnsweredQuestions> getAedq() {
		return aedq;
	}

	public void setAedq(List<AnsweredQuestions> aedq) {
		this.aedq = aedq;
	}

	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
	}
	public int getUid() {
		return userid;
	}
	public void setUid(int uid) {
		this.userid = uid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Users [userid=" + userid + ", username=" + username + ", password=" + password + "]";
	}
	
}
