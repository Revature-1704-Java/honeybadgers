package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.beans.Questions;
import com.revature.beans.Responses;
import com.revature.util.HibernateUtil;

public class ResponsesDao {
	//save a response based on responseString and question Object
	public void saveResponse(Responses savRep) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.save(savRep);
		tx.commit();
		session.close();
	}
	
	
	//get responses for questions object
	//should be called immediately after getting question
	//will update question objects and add to its responses attribute
	@SuppressWarnings("unchecked")
	public Questions getResponses(Questions quest) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		List<Responses> responses = session.createQuery("from Responses where qid = :namevar").
				setInteger("namevar", quest.getQ_id()).list();
		session.close();
		quest.setAnswers(responses);
		return quest;	
	}
	
}
