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
	Questions qid;
	
	@Column(name="response")
	private String response;
	
	public Responses() {}
	
	public Responses(Questions qid, String response) {
		this.qid = qid;
		this.response = response;
	}

	public Responses(int rid, Questions qid, String response) {
		super();
		this.rid = rid;
		this.qid = qid;
		this.response = response;
	}

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

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	@Override
	public String toString() {
		return "Responses [rid=" + rid + ", qid=" + qid + ", response=" + response + "]";
	}
	
	
}