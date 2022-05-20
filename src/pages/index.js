import React from 'react'
// Import from an installed package - Bootsrap
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => {
  // video urls
  const video_urls = [
    {
      id: 1,
      title: 'Video One',
      video_url:
        'https://res.cloudinary.com/chris101/video/upload/v1645684691/video_1.mp4',
    },
    {
      id: 2,
      title: 'Video Two',
      video_url:
        'https://res.cloudinary.com/chris101/video/upload/v1645684672/video_2.mp4',
    },
    {
      id: 3,
      title: 'Video Three',
      video_url:
        'https://res.cloudinary.com/chris101/video/upload/v1645684663/video_3.mp4',
    },
  ]

  // handle mouse enter
  const handleMouseEnter = (e) => {
    const vid = e.target
    vid.muted = true
    vid.play()
  }
  // handle mouse leave
  const handleMouseLeave = (e) => {
    const vid = e.target
    vid.muted = false
    vid.currentTime = 0
    vid.pause()
  }

  return (
    <div className='container'>
      <h1 className='text-center mt-4'>Video Show</h1>

      {/* video player */}
      <div className='container'>
        <div className='row'>
          {/* display videos */}
          {video_urls.map((video) => (
            <div key={video.id} className='col-lg-4 col-sm-6 mb-4'>
              <div className='card h-100'>
                <div className='card-body'>
                  <h4 className='card-title'>{video.title}</h4>
                  <video
                    width='320'
                    height='240'
                    controls
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <source src={video.video_url} type='video/mp4' />
                  </video>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IndexPage
