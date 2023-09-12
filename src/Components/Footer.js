import { Link, useLocation } from "react-router-dom";
export default function Footer() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/Login-Register";
  if (isAuthPage) return null;
  return (
      <footer>
        <div class="footer section-me bg-section-color mb-2 my-box-shadow">
          <div class="footer-row sociale">
            <a href="#">
              <i class="fab fa-facebook-square "></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-whatsapp-square"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter-square"></i>
            </a>
          </div>

          <div class="footer-row">
            <ul>
              <li>
                <Link to="/Contact">تواصل معنا</Link>
              </li>
              <li>
                <Link to="#">خدماتنا</Link>
              </li>
              <li>
                <Link to="#">سياساتنا</Link>
              </li>
              <li>
                <Link to="#">القواعد والقوانين</Link>
              </li>
              <li>
                <Link to="#">المسار الوظيفي</Link>
              </li>
            </ul>
          </div>

          <div class="footer-row">
            حقوق النشر © 2023 - جميع الحقوق محفوظة || تصميم: خالد العبدالله
          </div>
        </div>
      </footer>
  );
}
