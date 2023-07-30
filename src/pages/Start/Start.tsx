import {
  undo,
  redo,
  pencil,
  arrowup,
  arrowdown,
  lock,
  bin,
  plus,
  hand,
  binYellow,
  pencilYellow,
  upload,
  eye,
  home,
  logo,
} from '@/assets/icons/'
import TemplatesWidget from '@/components/TemplatesWidget'
import Button from '@/components/ui/Button'
import SettingWidget from '@/components/SettingWidget'

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
            <div className="flex flex-col gap-3">
              <div
                id="main-layout"
                className="flex h-[800px] w-[360px] flex-col gap-4 overflow-auto bg-white px-4 py-8"
              >
                <div
                  id="add-new-element"
                  className="flex h-24 w-full flex-col items-center gap-4 rounded-lg border border-dashed border-blue-500 py-2 font-bold"
                >
                  <img src={plus} className="rounded-lg bg-slate-200 p-2" />
                  <span className="text-sm text-blue-500">
                    یک قالب را بکشید و رها کنید
                  </span>
                </div>
                <template id="button-template">
                  <div className="flex flex-col items-end">
                    <div className="inline-flex h-8 w-24 items-center justify-center gap-3 rounded-t-xl rounded-bl-xl rounded-br-sm border border-orange-200 bg-white px-2">
                      <div className="relative h-4 w-4">
                        <img src={hand} />
                      </div>
                      <div className="relative h-4 w-4">
                        <img src={binYellow} />
                      </div>
                      <div className="relative h-4 w-4">
                        <img src={pencilYellow} />
                      </div>
                    </div>
                    <div className="flex h-16 w-full flex-col items-center justify-center rounded-lg rounded-tr-none border border-dashed border-yellow-400 py-2 font-bold">
                      <button
                        className="rounded-2xl bg-gray-400 px-8 py-2 text-white"
                        id="button"
                      >
                        دکمه
                      </button>
                    </div>
                  </div>
                </template>
              </div>

              <button className="w-full rounded-lg border border-white bg-[#ffffff60] p-2 font-bold text-blue-600">
                افزودن صفحه
              </button>
            </div>
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
              options={[
                'کارت',
                'دکمه ها',
                'متن',
                'عکس',
                'ویدئو',
                'اسلایدر',
                'آیکون',
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default Start
