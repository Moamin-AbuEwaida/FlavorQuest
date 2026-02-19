import React from 'react';
import { Heart, MessageCircle, Share2, Award } from 'lucide-react';

const Community: React.FC = () => {
  const posts = [
    {
      user: "Chef Alex",
      avatar: "https://i.pravatar.cc/150?img=68",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
      content: "Just made the most amazing homemade pizza! 🍕 The secret is in the 72-hour dough fermentation.",
      likes: 245,
      comments: 42,
      time: "2h ago"
    },
    {
      user: "Sarah Cooks",
      avatar: "https://i.pravatar.cc/150?img=44",
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=800",
      content: "Sunday brunch goals. Avocado toast with poached eggs and a sprinkle of chili flakes. 🥑🍳",
      likes: 892,
      comments: 120,
      time: "5h ago"
    },
    {
      user: "Mike BBQ",
      avatar: "https://i.pravatar.cc/150?img=12",
      image: "https://images.unsplash.com/photo-1529193591184-b1d580690dd0?auto=format&fit=crop&q=80&w=800",
      content: "Slow smoked brisket for 14 hours. The bark on this is incredible! #bbq #smoking",
      likes: 156,
      comments: 18,
      time: "1d ago"
    }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-brand-gray/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in-up">
            <h1 className="font-display font-black text-3xl text-brand-black">Community Feed</h1>
            <button className="bg-brand-black text-white px-5 py-2.5 rounded-xl font-bold hover:bg-brand transition-all hover:scale-105 active:scale-95 text-sm shadow-lg">
                + New Post
            </button>
        </div>

        {/* Featured Chef */}
        <div className="bg-gradient-to-r from-brand to-orange-400 rounded-3xl p-6 text-white mb-10 flex items-center justify-between shadow-lg animate-fade-in-up delay-100 transform transition-transform hover:scale-[1.01]">
             <div className="flex items-center gap-4">
                 <div className="relative">
                     <img src="https://i.pravatar.cc/150?img=33" className="w-16 h-16 rounded-full border-2 border-white" />
                     <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-brand-black p-1 rounded-full animate-bounce-slow">
                         <Award size={14} />
                     </div>
                 </div>
                 <div>
                     <div className="text-xs font-bold uppercase opacity-80 mb-1">Chef of the Week</div>
                     <div className="font-display font-bold text-xl">Monica Geller</div>
                 </div>
             </div>
             <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-bold text-sm backdrop-blur-sm transition-colors">
                 Follow
             </button>
        </div>

        {/* Feed */}
        <div className="space-y-6">
            {posts.map((post, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 animate-fade-in-up" style={{animationDelay: `${(idx + 2) * 100}ms`}}>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <img src={post.avatar} className="w-10 h-10 rounded-full bg-gray-100 hover:scale-110 transition-transform" />
                            <div>
                                <h3 className="font-bold text-brand-black cursor-pointer hover:text-brand transition-colors">{post.user}</h3>
                                <p className="text-xs text-gray-400 font-medium">{post.time}</p>
                            </div>
                        </div>
                        <button className="text-gray-400 hover:text-brand-black transition-colors p-2 hover:bg-gray-50 rounded-full"><Share2 size={18} /></button>
                    </div>

                    <p className="text-gray-600 font-medium mb-4 leading-relaxed">{post.content}</p>

                    <div className="rounded-2xl overflow-hidden mb-4 cursor-pointer">
                        <img src={post.image} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                    <div className="flex items-center gap-6 pt-2">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-pink-500 font-bold text-sm transition-colors group">
                            <Heart size={20} className="group-hover:fill-pink-500 group-active:scale-125 transition-transform" /> {post.likes}
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 font-bold text-sm transition-colors group">
                            <MessageCircle size={20} className="group-hover:fill-blue-500" /> {post.comments}
                        </button>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Community;