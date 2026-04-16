import React, { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const variant = 22;
    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <section className="bg-slate-500/5 rounded-3xl p-8 border border-slate-500/20 shadow-sm mt-10">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="text-blue-500">💬</span> Відгуки роботодавців
      </h2>
      
      {comments.length === 0 ? (
        <p className="animate-pulse opacity-60 font-mono">Завантаження даних...</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div 
              key={comment.id} 
              className="p-5 rounded-2xl bg-slate-500/5 border border-slate-500/10 hover:border-blue-500/30 transition-colors duration-300"
            >
              <h3 className="font-bold text-blue-500 mb-2">{comment.email}</h3>
              <p className="opacity-80 text-sm leading-relaxed">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;