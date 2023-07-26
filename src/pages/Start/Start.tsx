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
              <button className="canvas-button">
                <img src={pencil} />
              </button>
              <button className="canvas-button">
                <img src={arrowup} />
              </button>
              <button className="canvas-button">
                <img src={arrowdown} />
              </button>
              <button className="canvas-button">
                <img src={lock} />
              </button>
              <button className="canvas-button">
                <img src={bin} />
              </button>
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
          className="pointer-events-none absolute bottom-0 left-0 flex w-full flex-row justify-between  max-md:translate-y-full max-md:flex-col max-md:justify-end max-md:overflow-y-scroll max-md:pb-6 md:h-full"
        >
          <div
            id="left"
            className="rtl pointer-events-auto flex w-[300px] flex-col bg-white shadow-lg max-md:order-2 max-md:hidden max-md:w-full max-md:px-4 md:block md:p-6"
          >
            <div className="flex h-full flex-col gap-4">
              <div className="mb-2 font-bold">تنظیمات صفحه</div>
              <div className="page-options-option">
                <span className="flex items-center">فاصله بین فریم ها</span>
                <select className="rounded-md border border-gray-200 p-1 pl-3">
                  <option value="1">پیش فرض</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="page-options-option">
                <span className="flex items-center">حاشیه</span>
                <input
                  className="ltr w-8 rounded-md border border-gray-200 p-1 text-center"
                  type="text"
                  placeholder="12"
                />
              </div>
              <div className="page-options-option">
                <span className="flex items-center">فاصله از دیواره</span>
                <input
                  className="ltr w-8 rounded-md border border-gray-200 p-1 text-center"
                  type="text"
                  placeholder="24"
                />
              </div>
            </div>
          </div>
          <div
            id="right"
            className="rtl pointer-events-auto flex w-[150px] flex-col bg-white p-2 shadow-lg max-md:order-1 max-md:hidden max-md:w-full max-md:p-0 max-md:px-4 max-md:shadow-none md:block"
          >
            <div className="flex h-full flex-col gap-2">
              <div className="mb-2 font-bold">قالب ها</div>
              <button className="template-type">کارت</button>
              <button className="template-type">دکمه ها</button>
              <button className="template-type">متن</button>
              <button className="template-type">عکس</button>
              <button className="template-type">ویدئو</button>
              <button className="template-type">اسلایدر</button>
              <button className="template-type">آیکون</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default Start
