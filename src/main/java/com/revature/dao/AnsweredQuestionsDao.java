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
  public void saveAnsweredQuestion(AnsweredQuestions aq) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.save(aq);
		tx.commit();
		session.close();
	}
	
	//return list of AnsweredQuestions object based on users uid
	// Returned AnsweredQuestions objects have questions stored in qid property
	// but only store int pk of questions in database
	@SuppressWarnings("unchecked")
	public List<AnsweredQuestions> getUsersAedQ(Users currentUser){
		Session session = HibernateUtil.getSessionFactory().openSession();
		List<AnsweredQuestions> aedq = session.createQuery("from AnsweredQuestions where userid = :namevar").
				setInteger("namevar", currentUser.getId()).list();
		session.close();
		return aedq;		
	}
	
	public AnsweredQuestions getAedQWithUserandQuestion(Users user, Questions quest) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		List<AnsweredQuestions> listAedQ = session.createQuery("from AnsweredQuestions where userid =:uid and qid =:qid").
				setInteger("uid", user.getId()).setInteger("qid", quest.getQ_id()).list();
		if(listAedQ == null) {
			return null;
		}
		session.close();
		return listAedQ.get(0);
	}
	
	public void updateAnsweredQuestion(AnsweredQuestions aedQ) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.update(aedQ);
		tx.commit();
		session.close();
	}
}
