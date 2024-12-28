import React from "react";
import "../style/EntryPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userStoreData } from "../utils/Store";
import { userStoredLabels } from "../utils/Store";

const Questionnaire = () => {
  const navigate = useNavigate();

  const handleSubmitAnswers = async () => {
    let labels = [];
    let userLabels = [];

    const res = await axios.get("http://localhost:8080/labels", {});

    if (document.getElementById("oily").checked) {
      labels.push("oily-skin");
    }
    if (document.getElementById("dry").checked) {
      labels.push("dry-skin");
    }
    if (document.getElementById("normal").checked) {
      labels.push("normal-skin");
    }
    if (document.getElementById("anti-aging").checked.checked) {
      labels.push("anti-age-products");
    }
    if (document.getElementById("young-skin").checked.checked) {
      labels.push("young-age-products");
    }
    if (document.getElementById("flower").checked) {
      labels.push("flower-scents");
    }
    if (document.getElementById("winter").checked) {
      labels.push("winter-scents");
    }
    if (document.getElementById("vanilla").checked) {
      labels.push("vanilla-scents");
    }
    if (document.getElementById("fresh").checked) {
      labels.push("fresh-scents");
    }
    if (document.getElementById("dermato-yes").checked) {
      labels.push("dermatocosmetics");
    }
    if (document.getElementById("dermato-no").checked) {
      labels.push("non-dermaticosmetics");
    }
    if (document.getElementById("damaged").checked) {
      labels.push("damaged-hair");
    }
    if (document.getElementById("coloured").checked) {
      labels.push("coloured-hair");
    }
    if (document.getElementById("curly").checked) {
      labels.push("curly-hair");
    }

    for (let i = 0; i < labels.length; i++) {
      for (let j = 0; j < res.data.length; j++) {
        if (labels[i] === res.data[j].labelName) {
          userLabels.push(res.data[j].id);
          userStoredLabels.push(res.data[j].id);
        }
      }
    }

    for (let i = 0; i < userLabels.length; i++) {
      const res1 = await axios.post("http://localhost:8080/addUserLabel", {
        userId: userStoreData.id,
        labelId: userLabels[i],
      });
    }

    navigate("/login");
  };

  return (
    <section id="entry-page">
      <form>
        <h2>Personal recommendations questions</h2>
        <fieldset>
          <legend>
            Please respond to the following questions to receive personalised
            products!
          </legend>
          <ol>
            <li>
              Choose your skin type:
              <ul>
                <li>
                  <input type="checkbox" name="skin-type" id="oily" /> Oily-skin
                </li>
                <li>
                  <input type="checkbox" name="skin-type" id="dry" /> Dry-skin
                </li>
                <li>
                  <input type="checkbox" name="skin-type" id="normal" />{" "}
                  Normal-skin
                </li>
              </ul>
            </li>
            <li>
              Do you prefer anti aging products or products that help the
              younger skin?:
              <ul>
                <li>
                  <input type="checkbox" name="old-wise" id="anti-aging" />{" "}
                  Young-age
                </li>
                <li>
                  <input type="checkbox" name="old-wise" id="young-skin" />{" "}
                  Anti-age
                </li>
              </ul>
            </li>
            <li>
              Choose your favourite scent:
              <ul>
                <li>
                  <input type="checkbox" name="scent" id="flower" />{" "}
                  Flowers-scented
                </li>
                <li>
                  <input type="checkbox" name="scent" id="winter" />{" "}
                  Winter-scented
                </li>
                <li>
                  <input type="checkbox" name="scent" id="vanilla" />{" "}
                  Vanilla-scented
                </li>
                <li>
                  <input type="checkbox" name="scent" id="fresh" />{" "}
                  Fresh-scented
                </li>
              </ul>
            </li>
            <li>
              Do you feel the need for dermatocosmetic products?:
              <ul>
                <li>
                  <input type="checkbox" name="dermato" id="dermato-yes" />{" "}
                  Dermatocosmetic
                </li>
                <li>
                  <input type="checkbox" name="dermato" id="dermato-no" />{" "}
                  Non-dermatocosmetic
                </li>
              </ul>
            </li>
            <li>
              Choose your hair type:
              <ul>
                <li>
                  <input type="checkbox" name="hair-type" id="damaged" />{" "}
                  Damaged-hair
                </li>
                <li>
                  <input type="checkbox" name="hair-type" id="coloured" />{" "}
                  Coloured-hair
                </li>
                <li>
                  <input type="checkbox" name="hair-type" id="curly" />{" "}
                  Curly-hair
                </li>
              </ul>
            </li>
          </ol>
        </fieldset>
        <button type="button" onClick={handleSubmitAnswers}>
          Submit answers
        </button>
      </form>
    </section>
  );
};

export default Questionnaire;
