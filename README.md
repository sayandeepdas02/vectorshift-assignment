# VectorShift Frontend Technical Assessment

This repository contains the solution for the VectorShift Frontend Technical Assessment.

## Project Structure

- `frontend/`: React application using React Flow for the node editor.
- `backend/`: FastAPI application handling graph analysis.

## Features Implemented

1.  **Node Abstraction**: A centralized `BaseNode` component handles common layout, styling, and handle logic, allowing for rapid creation of new nodes.
2.  **New Node Types**: Added `MathNode`, `DelayNode`, `BooleanNode`, `SliderNode`, and `ConditionNode`.
3.  **Advanced Text Node**: Supports auto-resizing and creates dynamic input handles based on `{{variable}}` syntax.
4.  **Professional Styling**: Clean, consistent UI using CSS Modules and a polished design system.
5.  **Backend Integration**: The frontend sends the pipeline structure to the backend, which calculates the number of nodes/edges and checks if the graph is a Directed Acyclic Graph (DAG) using Kahn's Algorithm.

## Setup Instructions

### Frontend

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm start
    ```
    Access the app at `http://localhost:3000`.

### Backend

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install dependencies (ensure Python is installed):
    ```bash
    pip install fastapi uvicorn
    ```
3.  Start the server:
    ```bash
    uvicorn main:app --reload --port 8000

    ```
    The server will run at `http://localhost:8000`.

## Architecture Decisions

-   **BaseNode Abstraction**: Used to follow the DRY principle. Instead of duplicating layout code in every node, `BaseNode` wraps the content and renders handles based on configuration.
-   **CSS Modules**: Chosen for scoped styling to prevent conflicts and keep styles close to components.
-   **Ad jacency List & Kahn's Algorithm**: Used in the backend for efficient DAG detection ($O(V+E)$).
-   **Dynamic Handles**: The `TextNode` parses input using Regex locally to update handles interactively.
