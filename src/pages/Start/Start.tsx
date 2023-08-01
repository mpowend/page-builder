import {
  undo,
  redo,
  pencil,
  arrowup,
  arrowdown,
  lock,
  bin,
  upload,
  eye,
  home,
  logo,
} from '@/assets/icons/'
import TemplatesWidget from '@/components/TemplatesWidget'
import Button from '@/components/ui/Button'
import SettingWidget from '@/components/SettingWidget'
import PageWidget from '@/components/PageWidget/PageWidget'

const Start = () => (
  <div className="relative flex h-screen w-full flex-col font-vazir">
    <div
      id="arrow"
      className="fixed bottom-0 left-0 z-20 hidden h-6 w-full flex-row justify-center max-md:flex"
    >
      <button className="w-full rotate-180 rounded-md bg-yellow-100">▼</button>
    </div>
    <nav className="z-10 flex flex-row items-center p-3 shadow-md">
      <div className="flex flex-row gap-2">
        <button className="p-2">
          <img src={undo} alt="undo" />
        </button>

        <button className="p-2">
          <img src={redo} alt="redo" />
        </button>
      </div>
      <div className="mx-auto w-0 grow text-center text-blue-600">نام صفحه</div>
      <div className="flex flex-row gap-6 px-3">
        <img src={upload} alt="upload" />
        <img src={eye} alt="eye" />
        <img src={home} alt="home" />
        <img src={logo} alt="logo" />
      </div>
    </nav>
    <main className="flex h-full w-full flex-row max-md:h-0 max-md:grow max-md:flex-col">
      <div className="relative h-full w-full">
        <div className="relative flex h-full grow flex-col items-center justify-center bg-lightpressed max-md:order-3">
          <div className="flex h-[80%] flex-row gap-4">
            <div className="flex flex-col gap-2">
              {[
                { text: 'مداد', image: pencil },
                { text: 'بالا', image: arrowup },
                { text: 'پایین', image: arrowdown },
                { text: 'قفل', image: lock },
                { text: 'حذف', image: bin },
              ].map(({ text, image }) => (
                <Button key={text} tooltip={text}>
                  <img src={image} />
                </Button>
              ))}
            </div>
            <PageWidget />
          </div>
        </div>
        <div
          id="overlay"
          className="pointer-events-none absolute bottom-0 left-0 flex w-full flex-row justify-between max-md:translate-y-full max-md:flex-col max-md:justify-end max-md:overflow-y-scroll max-md:pb-6 md:h-full"
        >
          <div
            id="left"
            className="rtl pointer-events-auto flex w-[300px] flex-col bg-white shadow-lg max-md:order-2 max-md:hidden max-md:w-full max-md:px-4 md:block md:p-6"
          >
            <SettingWidget element="test" />
          </div>
          <div
            id="right"
            className="rtl pointer-events-auto flex w-[150px] flex-col bg-white p-2 shadow-lg max-md:order-1 max-md:hidden max-md:w-full max-md:p-0 max-md:px-4 max-md:shadow-none md:block"
          >
            <TemplatesWidget
              // options={[
              //   'کارت',
              //   'دکمه ها',
              //   'متن',
              //   'عکس',
              //   'ویدئو',
              //   'اسلایدر',
              //   'آیکون',
              // ]}
              options={[
                { title: 'کارت', type: 'card' },
                { title: 'دکمه ها', type: 'button' },
                { title: 'متن', type: 'text' },
                { title: 'عکس', type: 'image' },
                { title: 'ویدئو', type: 'video' },
                { title: 'اسلایدر', type: 'slider' },
                { title: 'آیکون', type: 'icon' },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default Start
