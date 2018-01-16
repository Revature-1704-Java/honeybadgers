package com.revature.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="tags")
public class Tags {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="tSeq")
	@SequenceGenerator(allocationSize=1, name="tSeq", sequenceName="TAG_SEQ")	
	@Column(name="tid")
	private int tid;
	
	@Column(name="tag")
	private String tag;
	
	@ManyToOne
	@JoinColumn(name="userid")
	Users userCreator;
	
	@OneToMany
	List<Questions> taggedQuestions;
	
	public Tags() {}
	
	public Tags(String tag, Users userCreator) {
		this.tag = tag;
		this.userCreator = userCreator;
	}

	public Tags(int tid, String tag, Users userCreator, List<Questions> taggedQuestions) {
		super();
		this.tid = tid;
		this.tag = tag;
		this.userCreator = userCreator;
		this.taggedQuestions = taggedQuestions;
	}

	@Override
	public String toString() {
		return "Tags [tid=" + tid + ", tag=" + tag + "]";
	}

	public int getTid() {
		return tid;
	}

	public void setTid(int tid) {
		this.tid = tid;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

	public Users getUserCreator() {
		return userCreator;
	}

	public void setUserCreator(Users userCreator) {
		this.userCreator = userCreator;
	}

	public List<Questions> getTaggedQuestions() {
		return taggedQuestions;
	}

	public void setTaggedQuestions(List<Questions> taggedQuestions) {
		this.taggedQuestions = taggedQuestions;
	}
}
