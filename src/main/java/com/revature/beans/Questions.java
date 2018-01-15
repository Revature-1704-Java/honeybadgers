package com.revature.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="Questions")
public class Questions {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="questSeq")
	@SequenceGenerator(allocationSize=1, name="questSeq", sequenceName="QUEST_SEQ")	
	@Column(name="qid")
	private int qid;

	@Column(name="question", unique=true)
	private String question;
	
	@Column(name="answer")
	private String answer;
	
	@Column(name="successes")
	private int successes;
	
	@Column(name="total")
	private int total;
	
	@Column(name="tag")
	private String tag;
	
//	@OneToMany(mappedBy="qid", fetch=FetchType.LAZY)
	@OneToMany(fetch=FetchType.EAGER)
	List<AnsweredQuestions> qaed;
	
//	@OneToMany(mappedBy="qid", fetch=FetchType.LAZY)
	@OneToMany(fetch=FetchType.EAGER)
	List<Responses> responses;
	
	public Questions(String question, String answer, String tag) {
		this.question = question;
		this.answer = answer;
		this.tag = tag;
		this.successes = 0;
		this.total = 0;
	}
	
	
	public Questions(int qid, String question, String answer, int successes, int total, String tag) {
		super();
		this.qid = qid;
		this.question = question;
		this.answer = answer;
		this.successes = successes;
		this.total = total;
		this.tag = tag;
	}

	public Questions() {}

	@Override
	public String toString() {
		return "Questions [qid=" + qid + ", question=" + question + ", answer=" + answer + ", successes=" + successes
				+ ", total=" + total + ", tag=" + tag + ", qaed=" + qaed + ", responses=" + responses + "]";
	}
	
	public List<AnsweredQuestions> getQaed() {
		return qaed;
	}


	public void setQaed(List<AnsweredQuestions> qaed) {
		this.qaed = qaed;
	}


	public List<Responses> getResponses() {
		return responses;
	}


	public void setResponses(List<Responses> responses) {
		this.responses = responses;
	}


	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public int getSuccesses() {
		return successes;
	}
	public void setSuccesses(int successes) {
		this.successes = successes;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	
	
}
