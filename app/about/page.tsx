import React from 'react'

function AboutPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            <div className="text-center p-10 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">About Page</h1>
                <p className="text-lg md:text-xl max-w-xl mx-auto">
                    Welcome to the About Page. This is where you can share your story, mission, or background.
                </p>
            </div>
        </div>
    )
}

export default AboutPage
