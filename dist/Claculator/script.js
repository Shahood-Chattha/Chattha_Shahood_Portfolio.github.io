var btns = document.querySelectorAll("li");
      btns.forEach((node) => {
        node.addEventListener("mousedown", function (event) {
          const value = node.innerHTML.trim();
          const result = document.querySelector(".resultbar");
          const result_text = result.innerHTML.trim();

          if (
            result_text == 0 ||
            result_text == "Infinity" ||
            result_text == "undefined"
          ) {
            result.innerHTML = "";
          }
          if (value == "=") {
            let solution = eval(result_text);
            result.innerHTML = solution;
            return solution;
          }
          if (value == "C") {
            result.innerHTML = "";
            return true;
          }
          if (result_text == "Ans.") {
            result.innerHTML = solution;
          }
          result.append(value);
        });
      });