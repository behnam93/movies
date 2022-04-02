import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Skeletons({ h2title }) {
  const mediaQuer = useMediaQuery("(max-width:550px)");
  return (
    <div className="movies-list">
      <h2>{h2title}</h2>
      <div className="movie-grid">
        {!mediaQuer && (
          <>
            <div className="movie">
              <Stack>
                <Skeleton
                  variant="rectangular"
                  width={190}
                  height={280}
                  animation="wave"
                />
              </Stack>
            </div>
            <div className="movie">
              <Stack>
                <Skeleton
                  variant="rectangular"
                  width={190}
                  height={280}
                  animation="wave"
                />
              </Stack>
            </div>
            <div className="movie">
              <Stack>
                <Skeleton
                  variant="rectangular"
                  width={190}
                  height={280}
                  animation="wave"
                />
              </Stack>
            </div>
            <div className="movie">
              <Stack>
                <Skeleton
                  variant="rectangular"
                  width={190}
                  height={280}
                  animation="wave"
                />
              </Stack>
            </div>
          </>
        )}
        {/* if max width under 550px */}
        {mediaQuer && (
          <div className="movie">
            <Stack>
              <Skeleton
                variant="rectangular"
                width={340}
                height={430}
                animation="wave"
              />
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
}
