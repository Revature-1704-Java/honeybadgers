package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="AnsweredQuestions")
public class AnsweredQuestions {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="aedqSeq")
	@SequenceGenerator(allocationSize=1, name="aedqSeq", sequenceName="AEDQ_SEQ")	
	@Column(name="quid")
	private int quid;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="userid")
	@JsonIgnore
	Users uid;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="qid")
	Questions qid;
	
	@Column(name="success")
	private boolean success;
	
	public AnsweredQuestions() {}
	
	public AnsweredQuestions(Users uid, Questions qid, boolean success) {
		super();
		this.uid = uid;
		this.qid = qid;
		this.success = success;
	}

	public int getQuid() {
		return quid;
	}

	public void setQuid(int quid) {
		this.quid = quid;
	}

	public Users getId() {
		return uid;
	}
  
  @JsonIgnore
	public void setId(Users uid) {
		this.uid = uid;
	}

	public Questions getQid() {
		return qid;
	}

	public void setQid(Questions qid) {
		this.qid = qid;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	@Override
	public String toString() {
		return "AnsweredQuestions [quid=" + quid + ", success=" + success + "]";
	}
	
}
