package com.revature.dao;


import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.beans.UserAuth;
import com.revature.beans.Users;
import com.revature.util.HibernateUtil;

public class UsersDao {
	
	//add new user to database 
	//input instance of Users bean
	public void saveUser(Users newUser){
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.save(newUser);
		tx.commit();
		session.close();
	}
	
	public UserAuth getUserandPass(String username) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		List<Users> retUserList = session.createQuery("from Users where username = :namevar").
				setString("namevar", username).list(); 
    Users retUser;
    if(retUserList.size() > 0) {
      retUser = retUserList.get(0);
    }
    else {
      retUser = null;
    }
		session.close();
		UserAuth retUserAuth = new UserAuth(retUser.getUsername(), retUser.getPassword());
		return retUserAuth;
	}
	
	//returns single user based on username
	//to be used for login i.e. check password
	//input username returns Users object
	public Users getUser(String username) {
		//return (Users) HibernateUtil.getSessionFactory().	openSession().get(Users.class, user.getUid());
		Session session = HibernateUtil.getSessionFactory().openSession();
		List<Users> retUserList = session.createQuery("from Users where username = :namevar").
				setString("namevar", username).list(); 
    Users retUser;
    if(retUserList.size() > 0) {
      retUser = retUserList.get(0);
    }
    else {
      retUser = null;
    }
		session.close();
		return retUser;
	}
	
	// delete current user
	// pass in Users object based on currentUser
	public void deleteUser(Users currentUser) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.delete(currentUser);
		tx.commit();
		session.close();
	}
	
	//change user privileges
	public void adminUpdate(String username, Users currentUser) {
		if(currentUser.isAdmin()) {
			Session session = HibernateUtil.getSessionFactory().openSession();
			Transaction tx = session.beginTransaction();
			Users toUpdate = getUser(username);
			toUpdate.setAdmin(!toUpdate.isAdmin());
			session.update(toUpdate);
			tx.commit();
			session.close();
		} 
		else {
			System.out.println("Current User does not have admin privileges");
		}
	}
	
    // update password

    public void updateUser(Users updatedUser){
	Session session = HibernateUtil.getSessionFactory().openSession();
	Transaction tx = session.beginTransaction();
	session.update(updatedUser);
	tx.commit();
	session.close();
    }
	
}
