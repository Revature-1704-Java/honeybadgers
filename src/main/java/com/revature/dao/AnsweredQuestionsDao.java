package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.beans.AnsweredQuestions;
import com.revature.beans.Questions;
import com.revature.beans.Users;
import com.revature.util.HibernateUtil;

public class AnsweredQuestionsDao {
	
	//called when a user submits a question they've answered
	//boolean correct if they have answered question correctly set to true
	public void questionAnswered(Users currentUser, Questions cQuest, boolean correct) {
		AnsweredQuestions aedq = new AnsweredQuestions(currentUser, cQuest, correct);
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.save(aedq);
		tx.commit();
		session.close();
	}
	
	//return list of AnsweredQuestions object based on users uid
	// Returned AnsweredQuestions objects have questions stored in qid property
	// but only store int pk of questions in database
	@SuppressWarnings("unchecked")
	public Users getUsersAedQ(Users currentUser){
		Session session = HibernateUtil.getSessionFactory().openSession();
		List<AnsweredQuestions> aedq = session.createQuery("from AnsweredQuestions where userid = :namevar").
				setInteger("namevar", currentUser.getUid()).list();
		session.close();
		currentUser.setAedq(aedq);
		return currentUser;		
	}
}
