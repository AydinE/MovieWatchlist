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

    @RequestMapping(value = "/addMovie", method = RequestMethod.POST)
    public Movie addMovie(@RequestBody Movie movie) {

        return movieRepository.save(movie);

    }

    @RequestMapping(value = "/getMovieList", method = RequestMethod.GET)
    public List<Movie> getAllMovies() {
        List<Movie> list = new ArrayList<>();
        movieRepository.findAll().forEach(list::add);
        return list;
    }

}
