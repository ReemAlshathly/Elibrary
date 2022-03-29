<?php
namespace coding\app\controllers;

use coding\app\models\book;

class booksController extends Controller{

    function newBook(){
        $this->view('new_book');
    }

        public function show(){

    }

    public function saveBook(){

        //print_r($_POST);
        $book=new book();
        $book->title=$_POST['title'];
        $book->image=$_POST['image'];
        $book->price=$_POST['price'];
        $book->description=$_POST['description'];
        $book->pages_number=$_POST['pages_number'];
        $book->category_id=$_POST['category_id'];
        $book->author_id=$_POST['author_id'];
        $book->publisher_id=$_POST['publisher_id'];
        $book->quantity=$_POST['quantity'];
        $book->format=$_POST['format'];
        $book->is_active=isset($_POST['is_active'])?1:0;
       
        $book->save();
        if($book->save())
        
        $this->view('feedback',['success'=>'data inserted successful']);
        else 
        $this->view('feedback',['danger'=>'can not add data']);

    }

    public function register(){
        $this->view("new_book");
    }

    public function delete(){
        
    }




}
?>