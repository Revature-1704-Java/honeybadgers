package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Responses")
public class Responses {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="repSeq")
	@SequenceGenerator(allocationSize=1, name="repSeq", sequenceName="REP_SEQ")	
	@Column(name="rid")
	private int rid;
	
	@ManyToOne
	@JoinColumn(name="qid")
	@JsonIgnore
	Questions qid;
	
	@Column(name="text")
	private String text;
	
	@Column(name="correct")
	private boolean correct;
	
	public boolean isCorrect() {
		return correct;
	}

	public void setCorrect(boolean correct) {
		this.correct = correct;
	}

	public Responses() {}
	
  public Responses(String text, boolean correct) {
    this.text = text;
    this.correct = correct;
  }

	//public Responses(int rid, Questions qid, String text, boolean correct) {
		//super();
		//this.rid = rid;
		//this.qid = qid;
		//this.text = text;
		//this.correct = correct;
	//}

	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
	}

	public Questions getQid() {
		return qid;
	}

	public void setQid(Questions qid) {
		this.qid = qid;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	@Override
	public String toString() {
		return "Responses [rid=" + rid +", text=" + text + ", correct=" + correct +"]";
	}
	
	
}
