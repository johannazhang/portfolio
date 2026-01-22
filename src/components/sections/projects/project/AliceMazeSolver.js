const AliceMazeSolver = () => {
  return (
    <div>
      <p>
        An algorithm that finds the solution to{" "}
        <a href="https://www.mathpuzzle.com/alicesolvers.htm" target="_blank">
          Robert Abbott's Alice Mazes
        </a>
        , given an input text file representation of an Alice Maze.
      </p>
      <br />
      <p>
        The objective of the Alice Maze is to find the shortest path from the
        start (red) position to the goal by following the arrows on the cells.
        The player starts with a step size of 1, but landing on a red arrow
        increases the step size by 1 and landing on a yellow arrow decreases the
        step size by 1. The design of this python algorithm is based on the
        breadth first search algorithm.
      </p>
    </div>
  );
};

export default AliceMazeSolver;
