/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import "./animeDetails.css";
import ReadMore from "@/components/Read/ReadMore";
import Link from "next/link";
import { useParams } from "next/navigation";

type AnimeDetail = {
  id: number;
  title: {
    romaji: string;
    english?: string;
    native?: string;
  };
  description: string;
  coverImage: {
    extraLarge: string;
    large: string;
    color: string;
  };
  bannerImage?: string;
  format: string;
  duration?: number;
  status: string;
  hashtag: string;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  source: string;
  season?: string;
  averageScore?: number;
  meanScore?: number;
  popularity: number;
  favourites?: number;
  studios: {
    nodes: { name: string }[];
  };
  genres: string[];
  tags: { name: string }[];
  characters: {
    edges: {
      role: string;
      node: {
        id: number;
        name: { full: string };
        image: { large: string };
      };
    }[];
  };
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
  } | null;
  recommendations: {
    edges: {
      node: {
        mediaRecommendation: {
          id: number;
          title: { romaji: string; english?: string };
          coverImage: { large: string };
          format: string;
        };
      };
    }[];
  };
};

export default function AnimeDetails() {
  const [anime, setAnime] = useState<AnimeDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAllCharater, setShowAllCharacter] = useState(false);
  const [showAllAnime, setShowAllAnime] = useState(false);

  // To toggle `showCharacter`
  function showCharacter() {
    setShowAllCharacter((prev) => !prev);
  }

  // To toggle `showAnime`
  function showAnime() {
    setShowAllAnime((prev) => !prev);
  }

  // const router = useRouter();
  const params = useParams();
  const id = params.id; // Access the 'id' parameter from the route

  useEffect(() => {
    if (id) {
      const fetchAnimeDetails = async () => {
        try {
          const response = await fetch(`/api/anime/${id}`);
          const data = await response.json();
          setAnime(data.data.Media);
        } catch (error) {
          console.log("Error fetching anime details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchAnimeDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container min-h-[100vh]">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!anime) {
    return <div>No data available</div>;
  }

  return (
    <>
      <div className="bg-white">
        {anime.bannerImage ? (
          <div
            className="anime-banner"
            style={{ backgroundImage: `url(${anime.bannerImage})` }}
          ></div>
        ) : (
          <div className="h-[200px] w-[100%] text-gray-400 text-center content-center">
            <span className="font-semibold text-xl">NO IMAGE</span>
          </div>
        )}
        <div className="anime-header mt-4">
          <img
            src={anime.coverImage.extraLarge}
            alt={anime.title.romaji}
            className="anime-cover"
          />
          <div className="anime-info">
            <div className="w-[900px]">
              <h1>{anime.title.romaji}</h1>
              {anime.description.length > 627 ? (
                <ReadMore>
                  {" "}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: anime.description,
                    }}
                  ></p>
                </ReadMore>
              ) : (
                <p
                  dangerouslySetInnerHTML={{
                    __html: anime.description,
                  }}
                ></p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="anime-details">
        <div className="flex justify-around mx-[5%] gap-[10%]">
          <div className="anime-meta">
            <strong>Format:</strong>
            <p> {anime.format}</p>
            <strong>Duration:</strong>
            <p> {anime.duration} min</p>
            <strong>Status:</strong>
            <p> {anime.status}</p>

            <strong>Start Date:</strong>
            <p>
              {" "}
              {(anime.startDate.month === 1 && "Jan") ||
                (anime.startDate.month === 2 && "Feb") ||
                (anime.startDate.month === 3 && "Mar") ||
                (anime.startDate.month === 4 && "Apr") ||
                (anime.startDate.month === 5 && "May") ||
                (anime.startDate.month === 6 && "June") ||
                (anime.startDate.month === 7 && "July") ||
                (anime.startDate.month === 8 && "Aug") ||
                (anime.startDate.month === 9 && "Sep") ||
                (anime.startDate.month === 10 && "Oct") ||
                (anime.startDate.month === 11 && "Nov") ||
                (anime.startDate.month === 12 && "Dec")}{" "}
              {anime.startDate.day}, {anime.startDate.year}
            </p>

            <strong>End Date:</strong>
            <p>
              {" "}
              {(anime.endDate.month === 1 && "Jan") ||
                (anime.endDate.month === 2 && "Feb") ||
                (anime.endDate.month === 3 && "Mar") ||
                (anime.endDate.month === 4 && "Apr") ||
                (anime.endDate.month === 5 && "May") ||
                (anime.endDate.month === 6 && "June") ||
                (anime.endDate.month === 7 && "July") ||
                (anime.endDate.month === 8 && "Aug") ||
                (anime.endDate.month === 9 && "Sep") ||
                (anime.endDate.month === 10 && "Oct") ||
                (anime.endDate.month === 11 && "Nov") ||
                (anime.endDate.month === 12 && "Dec")}{" "}
              {anime.endDate.day}, {anime.endDate.year}
            </p>

            <strong>Season:</strong>
            <p> {anime.season}</p>
            <strong>Average Score:</strong>
            <p> {anime.averageScore}</p>
            <strong>Mean Score:</strong>
            <p> {anime.meanScore}</p>
            <strong>Popularity:</strong>
            <p> {anime.popularity}</p>
            <strong>Favourites:</strong>
            <p> {anime.favourites}</p>

            <strong>Studios:</strong>
            <ul>
              {anime.studios.nodes.map((studio, index) => (
                <li key={index}>{studio.name}</li>
              ))}
            </ul>

            <strong>Source:</strong>
            <p> {anime.source}</p>
            <strong>Hashtag:</strong>
            <p> {anime.hashtag}</p>

            <strong>Genres:</strong>
            <ul>
              {anime.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>

            <strong>Tags:</strong>
            <ul>
              {anime.tags.map((tag, index) => (
                <li key={index}>{tag.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="anime-characters">
              <div className="flex justify-between">
                <h3 className="font-semibold text-xl text-slate-600">
                  Characters
                </h3>
                <h3
                  className="font-semibold text-slate-500 hover:cursor-pointer"
                  onClick={showCharacter}
                >
                  {showAllCharater ? "View Less" : "View All"}
                </h3>
              </div>
              <div className="mt-3 character-list">
                {showAllCharater
                  ? anime.characters.edges.slice(0, 14).map((character) => (
                      <div key={character.node.id} className="character-item">
                        <img
                          src={character.node.image.large}
                          alt={character.node.name.full}
                        />
                        <p className="font-medium text-gray-600">
                          {character.node.name.full}
                        </p>
                      </div>
                    ))
                  : anime.characters.edges.slice(0, 7).map((character) => (
                      <div key={character.node.id} className="character-item">
                        <img
                          src={character.node.image.large}
                          alt={character.node.name.full}
                        />
                        <p className="font-medium text-gray-600">
                          {character.node.name.full}
                        </p>
                      </div>
                    ))}
              </div>
            </div>
            {anime.trailer && (
              <div className="my-5">
                <h3 className="font-semibold text-xl text-slate-600 mb-3">
                  Trailer
                </h3>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${anime.trailer.id}?si=IO2c-CyPBFU1HhFf`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="anime-recommendations">
              <div className="flex justify-between">
                <h3 className="font-semibold text-xl text-slate-600">
                  Recommendations
                </h3>
                <h3
                  className="font-semibold text-slate-500 hover:cursor-pointer"
                  onClick={showAnime}
                >
                  {showAllAnime ? "View Less" : "View All"}
                </h3>
              </div>
              <div className="mt-3 recommendation-list">
                {showAllAnime
                  ? anime.recommendations.edges.map((rec) => (
                      <Link
                        href={`/item/${rec.node.mediaRecommendation.id}`}
                        key={rec.node.mediaRecommendation.id}
                      >
                        <div
                          key={rec.node.mediaRecommendation.id}
                          className="rec-item"
                        >
                          <img
                            src={rec.node.mediaRecommendation.coverImage.large}
                            alt={rec.node.mediaRecommendation.title.romaji}
                          />
                          <p className="text-left mb-3 font-medium text-gray-500">
                            {rec.node.mediaRecommendation.title.romaji.length >
                            17
                              ? `${rec.node.mediaRecommendation.title.romaji.slice(
                                  0,
                                  17
                                )}...`
                              : rec.node.mediaRecommendation.title.romaji}
                          </p>
                        </div>
                      </Link>
                    ))
                  : anime.recommendations.edges.slice(0, 7).map((rec) => (
                      <Link
                        href={`/item/${rec.node.mediaRecommendation.id}`}
                        key={rec.node.mediaRecommendation.id}
                      >
                        <div
                          key={rec.node.mediaRecommendation.id}
                          className="rec-item"
                        >
                          <img
                            src={rec.node.mediaRecommendation.coverImage.large}
                            alt={rec.node.mediaRecommendation.title.romaji}
                          />
                          <p className="text-left mb-3 font-medium text-gray-500">
                            {rec.node.mediaRecommendation.title.romaji.length >
                            17
                              ? `${rec.node.mediaRecommendation.title.romaji.slice(
                                  0,
                                  17
                                )}...`
                              : rec.node.mediaRecommendation.title.romaji}
                          </p>
                        </div>
                      </Link>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}