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
	
	@OneToMany
	@JoinColumn(name="userid")
	Users createUser;
	
	@ManyToOne
	List<Questions> taggedQuestions;
}
