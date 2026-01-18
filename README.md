# VectorShift Technical Assignment - Pipeline Builder

A powerful, interactive node-based pipeline builder application. This project demonstrates a full-stack implementation featuring a React-based frontend for visual graph editing and a FastAPI backend for graph analysis.

## 🚀 Project Overview

This application serves as a technical assessment submission for VectorShift. It allows users to create, connect, and configure various types of nodes to build logic pipelines.

**Key Capabilities:**
- **Visual Editor**: Drag-and-drop interface powered by React Flow.
- **Node System**: Robust set of node types including Math, Logic, I/O, and specialized Text nodes.
- **Intelligent Text Node**: Dynamic resizing and automatic variable detection (e.g., `{{input}}`) to generate handles.
- **Graph Analysis**: Backend validation to detect Directed Acyclic Graphs (DAGs) and count nodes/edges.
- **Polished UI**: Professional design system with consistent styling and responsiveness.

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18
- **Core Library**: React Flow (Node-based UI)
- **Styling**: Vanilla CSS / CSS Modules
- **Build Tool**: Create React App (React Scripts)

### Backend
- **Framework**: FastAPI (Python)
- **Server**: Uvicorn (ASGI)

## 📦 Setup & Run Instructions

### Prerequisites
- Node.js (v16+)
- Python (v3.9+)

### 1. Frontend Setup
Navigate to the `frontend` directory:
```bash
cd frontend
npm install
npm start
```
The application will launch at `http://localhost:3000`.

### 2. Backend Setup
Navigate to the `backend` directory:
```bash
cd backend
```

It is recommended to use a virtual environment:
```bash
# Create venv
python -m venv venv

# Activate venv
# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

Install dependencies and start the server:
```bash
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
The backend API will be available at `http://localhost:8000`.

## 🏗 Architecture & Design

### Frontend Architecture
- **Component Abstraction**: A `BaseNode` component strictly adheres to DRY principles, encapsulating common logic (handles, styling, layout) for all node types.
- **State Management**: React Flow's internal state is leveraged for graph data, with local component state for individual node logic.
- **Dynamic Logic**: The Text Node implements regex parsing to dynamically generate input handles based on user input, enabling "prompt template" like functionality.

### Backend Logic
- **Graph Validation**: Implements **Kahn's Algorithm** ($O(V+E)$) to efficiently detect cycles and determine if the constructed pipeline is a valid DAG (Directed Acyclic Graph).

## 📂 Repository Structure

- `frontend/`: Contains the React source code, components, and styling.
- `backend/`: Contains the FastAPI application and logic.

