package com.capgemini.controller;

import com.capgemini.model.Movie;
import com.capgemini.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    // Add one movie to the database.
    @RequestMapping(value = "/addMovie", method = RequestMethod.POST)
    public Movie addMovie(@RequestBody Movie movie) {

        return movieRepository.save(movie);

    }

    // Get all movies in the database
    @RequestMapping(value = "/getMovieList", method = RequestMethod.GET)
    public List<Movie> getAllMovies() {
        List<Movie> list = new ArrayList<>();
        movieRepository.findAll().forEach(list::add);
        return list;
    }

    // Get all movies that the user still wants to watch
    @RequestMapping(value = "/getWatchList", method = RequestMethod.GET)
    public List<Movie> getWatchList() {
        List<Movie> list = new ArrayList<>();
        movieRepository.findAll().forEach(list::add);

        List<Movie> watchList = new ArrayList<>();

        for (Movie movie : list) {

            if (movie.isOnWatchList()) watchList.add(movie);

        }

        return watchList;

    }

    // Get all movies that have already been viewed by the user
    @RequestMapping(value = "/getWatchedMovies", method = RequestMethod.GET)
    public List<Movie> getWatchedMovies() {
        List<Movie> list = new ArrayList<>();
        movieRepository.findAll().forEach(list::add);

        List<Movie> watchedList = new ArrayList<>();

        for (Movie movie : list) {

            if (movie.isWatched()) watchedList.add(movie);

        }

        return watchedList;

    }

}
