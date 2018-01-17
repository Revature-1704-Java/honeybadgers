package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.beans.Questions;
import com.revature.beans.Responses;
import com.revature.beans.Tags;
import com.revature.util.HibernateUtil;

public class TagsDao {
	public void saveTag(Tags tag) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.save(tag);
		tx.commit();
		session.close();
	}
	
	public Questions getTag(Questions quest) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		List<Tags> tags = session.createQuery("from Tags where qid = :namevar").
				setInteger("namevar", quest.getQid()).list();
		session.close();
		if(tags.size() == 0) {
			return null;
		}
		quest.setTags(tags.get(0));
		return quest;
	}
	
	public List<Tags> getAllTags(){
		Session session = HibernateUtil.getSessionFactory().openSession();
		List<Tags> tags = session.createQuery("from Tags").list();
		session.close();
		return tags;
	}
	
	public Tags getTagByString(String tagName) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		List<Tags> listTags = session.createQuery("from Tags where tag := namevar").setString("namevar", tagName).list();
		if(listTags.size() == 0) {
			return null;
		}
		session.close();
		return listTags.get(0);
	}
	
}
