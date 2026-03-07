'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] p-8 flex items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm text-gray-400">07.30</div>
          <div className="flex gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-gray-400 text-lg">Tuesday</div>
          <div className="text-black text-2xl font-bold">April 20</div>
        </div>

        {/* Quick Actions & Music Player */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Quick Actions */}
          <div className="bg-[#e0e5ec] rounded-3xl p-6 shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff]">
            <div className="grid grid-cols-2 gap-4">
              <button className="w-14 h-14 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </button>
              <button className="w-14 h-14 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0" />
                </svg>
              </button>
              <button className="w-14 h-14 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <button className="w-14 h-14 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
          </div>

          {/* Music Player */}
          <div className="bg-[#e0e5ec] rounded-3xl p-6 shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff]">
            <div className="text-xs font-bold mb-2">Number one for me</div>
            <div className="text-xs text-gray-400 mb-4">Maher Zain</div>
            <div className="w-full h-1 bg-gray-300 rounded-full mb-4">
              <div className="w-1/2 h-1 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <button className="text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6l12 6-12 6V6z" transform="rotate(180 12 12)" />
                </svg>
              </button>
              <button className="text-yellow-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              </button>
              <button className="text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6l12 6-12 6V6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Weather Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Weather Icon */}
          <div className="bg-[#e0e5ec] rounded-3xl p-6 shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>

          {/* Temperature */}
          <div className="bg-[#e0e5ec] rounded-3xl p-6 shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] flex items-center justify-center">
            <div className="text-4xl font-bold">24°</div>
          </div>

          {/* Empty Cards */}
          <div className="bg-[#e0e5ec] rounded-3xl shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff]"></div>
        </div>

        {/* Weather Description & Volume Controls */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Weather Description */}
          <div className="col-span-2 bg-[#e0e5ec] rounded-3xl p-6 shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff]">
            <div className="text-lg font-bold mb-1">a little rain</div>
            <div className="text-sm text-gray-400">Tomorrow's thunderstorm</div>
          </div>

          {/* Volume Control */}
          <div className="bg-[#e0e5ec] rounded-3xl p-4 shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] flex items-end justify-center">
            <div className="w-full h-32 flex items-end justify-center gap-3">
              <div className="w-12 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs font-bold">35%</div>
              <div className="w-12 h-28 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-[#e0e5ec] rounded-full p-4 shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff]">
          <div className="flex items-center justify-around">
            <button className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bdc4,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Instagram Credit */}
        <div className="text-center text-gray-400 text-xs mt-4">
          instagram.com/ygzuxrt
        </div>
      </div>
    </div>
  );
}
