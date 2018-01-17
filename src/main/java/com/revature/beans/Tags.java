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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="tags")
public class Tags {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="tSeq")
	@SequenceGenerator(allocationSize=1, name="tSeq", sequenceName="TAG_SEQ")	
	@Column(name="tid")
	private int tagId;
	
	@Column(name="tag")
	private String tagName;

	
	@OneToMany
	List<Questions> taggedQuestions;
	
	public Tags() {}
	
	public Tags(String tagName) {
		this.tagName = tagName;
	}

	public Tags(int tagId, String tagName, List<Questions> taggedQuestions) {
		super();
		this.tagId = tagId;
		this.tagName = tagName;
		this.taggedQuestions = taggedQuestions;
	}

	@Override
	public String toString() {
		return "Tags [tagId=" + tagId + ", tag=" + tagName + "]";
	}

	public int getTagId() {
		return tagId;
	}

	public void setTagId(int tagId) {
		this.tagId = tagId;
	}

	public String getTagName() {
		return tagName;
	}

	public void setTagName(String tagName) {
		this.tagName = tagName;
	}

	public List<Questions> getTaggedQuestions() {
		return taggedQuestions;
	}

	public void setTaggedQuestions(List<Questions> taggedQuestions) {
		this.taggedQuestions = taggedQuestions;
	}
}
