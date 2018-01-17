package com.revature.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.beans.Questions;
import com.revature.beans.Tags;
import com.revature.util.HibernateUtil;


public class QuestionsDao {
	
	//Save a question based on question answer and tag strings
	public void saveQuestion(Questions q) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.save(q);
		tx.commit();
		session.close();
	}
	
	public Questions getQuestion(String question) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		List<Questions> listQuest = session.createQuery("from Questions where question =:namevar").setString("namevar", question).list();
		if(listQuest.size()== 0) {
			return null;
		} 
		session.close();
		return listQuest.get(0);
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
		ResponsesDao rdao = new ResponsesDao();
		TagsDao tdao = new TagsDao();
		Tags tags = tdao.getTagByString(tag);
		List<Questions> quest = new ArrayList<>();
		List<Questions> retquest = new ArrayList<>();
		Session session = HibernateUtil.getSessionFactory().openSession();
		quest =	session.	createQuery("from Questions where tid = :namevar").
				setInteger("namevar", tags.getTagId()).list();
		if(quest.size() != 0) {
		for(int i = 0; i <10; i++) {
			int rand = (int) (Math.random() * quest.size());
			retquest.add(rdao.getResponses(quest.get(rand)));
		}
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
