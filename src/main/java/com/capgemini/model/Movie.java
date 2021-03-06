package com.capgemini.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Movie {

    @Id
    private int id;

    private int year;

    private boolean onWatchList;

    private boolean watched;

    private String name;

    public Movie() {

    }

    public Movie(int id, int year, String name) {

        this.id = id;
        this.year = year;
        this.name = name;

    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public boolean isOnWatchList() {
        return onWatchList;
    }

    public void setOnWatchList(boolean onWatchList) {
        this.onWatchList = onWatchList;
    }

    public boolean isWatched() {
        return watched;
    }

    public void setWatched(boolean watched) {
        this.watched = watched;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
