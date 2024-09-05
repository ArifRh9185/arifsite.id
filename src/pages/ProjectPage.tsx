
import BlurIn from '@/components/magicui/blur-in.js'
import Ripple from '@/components/magicui/ripple.js'

const ProjectPage = () => {
  return (
    <div
    className='w-full h-[28rem] flex justify-center items-center'>
    <BlurIn
      word="Maintenance"
      className="text-4xl font-bold text-white"
    />
    <Ripple/>
    </div>
  )
}

export default ProjectPage