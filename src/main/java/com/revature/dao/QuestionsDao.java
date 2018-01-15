package com.revature.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.beans.Questions;
import com.revature.util.HibernateUtil;


public class QuestionsDao {
	
	//Save a question based on question answer and tag strings
	public void saveQuestion(String question, String answer, String tag) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		Questions q = new Questions(question, answer, tag);
		session.save(q);
		tx.commit();
		session.close();
	}
	
	
	//Simple get question based on qid mostly used for internal purpose
	public Questions getQuestion(int qid) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Questions quest = (Questions) session.get(Questions.class, qid);
		session.close();
		return quest;
	}
	
	// return a list of 10 Questions objects
	// question objects do not have the responses in them
	@SuppressWarnings("unchecked")
	public List<Questions> getTenQuestion(String tag){
		List<Questions> quest = new ArrayList<>();
		List<Questions> retquest = new ArrayList<>();
		Session session = HibernateUtil.getSessionFactory().openSession();
		quest =	session.	createQuery("from Questions where tag = :namevar").
				setString("namevar", tag).list();
		for(int i = 0; i <10; i++) {
			int rand = (int) (Math.random() * quest.size());
			retquest.add(quest.get(rand));
		}
		session.close();
		return retquest;
	}
	
	//when question has been answered correctly
	//add to the total times it has been successfully answered
	// method also increments total times question has been answered
	public void updateSuccess(Questions quest) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		Questions q = getQuestion(quest.getQid());
		q.setSuccesses(q.getSuccesses() + 1);
		q.setTotal(q.getTotal() + 1);
		session.update(q);
		tx.commit();
		session.close();
	}
	
	//increment number of times question has been answered
	//should only be called upon an incorrectly answered
	//question
	public void updateTotal(Questions quest) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		Questions q = getQuestion(quest.getQid());
		q.setTotal(q.getTotal() + 1);
		session.update(q);
		tx.commit();
		session.close();
	}
	
}
