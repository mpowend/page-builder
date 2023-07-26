import logo from '@/assets/icons/logo.svg'

const Create = () => (
  <div className="h-screen w-screen">
    <div
      id="container"
      className="flex h-full w-full flex-col items-center justify-center gap-6 bg-neutral-300"
    >
      <div
        id="logo-container"
        className="flex flex-col items-center justify-center gap-3"
      >
        <img src={logo} width="72" height="72" />
        <h5 className="text-base font-semibold">صفحه ساز سروش پلاس</h5>
      </div>
      <div className="w-2/4 rounded-xl bg-white p-8 max-md:min-w-full">
        <form className="flex w-full flex-col gap-9" dir="rtl">
          <h2 className="w-full text-center text-sm">اطلاعات طراحی صفحه</h2>
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="page-title" className="w-full">
              عنوان صفحه خود را وارد کنید
            </label>
            <input
              type="text"
              id="page-title"
              placeholder="عنوان صفحه"
              className="placeholder: block w-full border-spacing-1 rounded-xl border-[1px] px-2 py-3 text-neutral-400 focus:outline-blue-600"
            />
            <div className="text-xs font-normal text-neutral-400">
              عنوان صفحه ، تگ عنوان HTML است.
            </div>
          </div>
          <div className="flex gap-4 max-lg:flex-col">
            <div className="flex w-full flex-col gap-1">
              <label
                htmlFor="page-title"
                className="w-full text-sm font-normal text-neutral-800"
              >
                نام صفحه خود را وارد کنید (انگلیسی)
              </label>
              <input
                type="text"
                id="page-title"
                placeholder="نام صفحه"
                className="placeholder: block w-full border-spacing-1 rounded-xl border-[1px] px-2 py-3 text-neutral-400 focus:outline-blue-600"
              />
              <div>
                <input type="checkbox" id="form-checkbox" />
                <label htmlFor="form-checkbox">در طراحی نمایش داده شود </label>
              </div>
            </div>
            <div className="flex w-full flex-col gap-1">
              <label
                htmlFor="page-title"
                className="w-full text-sm font-normal text-neutral-800"
              >
                نام صفحه خود را وارد کنید (فارسی)
              </label>
              <input
                type="text"
                id="page-title"
                placeholder="نام صفحه"
                className="placeholder: block w-full border-spacing-1 rounded-xl border-[1px] px-2 py-3 text-neutral-400 focus:outline-blue-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="h-full w-full rounded-xl bg-blue-600 px-10 py-4 text-white hover:bg-blue-800"
          >
            ذخیره و شروع طراحی
          </button>
        </form>
      </div>
    </div>
  </div>
)

export default Create
