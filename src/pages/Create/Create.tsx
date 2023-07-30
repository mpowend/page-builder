import logo from '@/assets/icons/logo.svg'
import TextInput from '../../components/ui/textInput/TextInput'

const Create = () => (
  <div className="w-screen h-screen">
    <div
      id="container"
      className="flex flex-col items-center justify-center w-full h-full gap-6 bg-neutral-300"
    >
      <div
        id="logo-container"
        className="flex flex-col items-center justify-center gap-3"
      >
        <img src={logo} width="72" height="72" />
        <h5 className="text-base font-semibold">صفحه ساز سروش پلاس</h5>
      </div>
      <div className="w-2/4 p-8 bg-white rounded-xl max-md:min-w-full">
        <form className="flex flex-col w-full gap-9" dir="rtl">
          <h2 className="w-full text-sm text-center">اطلاعات طراحی صفحه</h2>
          <div className="flex flex-col w-full gap-1">
            <TextInput
              title="عنوان صفحه خود را وارد کنید"
              placeholder="عنوان صفحه"
              Sub={
                <div className="text-xs font-normal text-neutral-400">
                  عنوان صفحه ، تگ عنوان HTML است.
                </div>
              }
            />
          </div>
          <div className="flex gap-4 max-lg:flex-col">
            <div className="flex flex-col w-full gap-1">
              <TextInput
                title="نام صفحه خود را وارد کنید (انگلیسی)"
                placeholder="نام صفحه"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <TextInput
                title="نام صفحه خود را وارد کنید (فارسی)"
                placeholder="نام صفحه"
              />
            </div>
          </div>
          <div className="flex gap-1 -mt-8">
            <input type="checkbox" id="form-checkbox" />
            <label htmlFor="form-checkbox">در طراحی نمایش داده شود </label>
          </div>
          <button
            type="submit"
            className="w-full h-full px-10 py-4 text-white bg-blue-600 rounded-xl hover:bg-blue-800"
          >
            ذخیره و شروع طراحی
          </button>
        </form>
      </div>
    </div>
  </div>
)

export default Create
