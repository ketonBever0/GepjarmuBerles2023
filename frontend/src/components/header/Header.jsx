import NavigationBar from "../NavigationBar"
import BackgroundImage from "./BackgroundImage"
const Header = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <header>
          <NavigationBar />
          <BackgroundImage />
        </header>
      </div>
    </div>
  )
}

export default Header