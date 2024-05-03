window.onload = function () {
	var theDiv = document.getElementById("result");
	var nums = document.getElementsByClassName("buttons");
	var eql = document.getElementById("equals");
	var clearall = document.getElementById("clearall");
	var deleteone = document.getElementById("deleteone");

	for (var i = 0; i < nums.length; i++) {
		let catchValue = nums[i].innerHTML;
		let type = nums[i].id;
		nums[i].addEventListener(
			"click",
			function typechar() {
				if (
					catchValue.includes("=") === false ||
					catchValue.includes("null") === false
				) {
					if (
						type.includes("func") &&
						(theDiv.innerHTML[theDiv.innerHTML.length - 1].includes("+") ||
							theDiv.innerHTML[theDiv.innerHTML.length - 1].includes("-") ||
							theDiv.innerHTML[theDiv.innerHTML.length - 1].includes("/") ||
							theDiv.innerHTML[theDiv.innerHTML.length - 1].includes("x") ||
							theDiv.innerHTML[theDiv.innerHTML.length - 1].includes("."))
					) {
						var newstring = theDiv.innerHTML.substring(0, 15);
						theDiv.innerHTML = newstring.slice(0, -1) + catchValue;
					}
					else {
						theDiv.innerHTML = theDiv.innerHTML.substring(0, 15) + catchValue;
					}
				}
				else {
					theDiv.innerHTML = theDiv.innerHTML.substring(0, 15);
				}
			},
			false
		);
	}

	function equals() {
		let content = theDiv.innerHTML;
		if (content.includes("x")) {
			let elems = content.split("x");
			theDiv.innerHTML = elems.reduce(function (a, b) {
				if (
					a === null ||
					b === null ||
					a === "" ||
					b === "" ||
					a.match(/^[a-zA-Z]+$/) ||
					b.match(/^[a-zA-Z]+$/)
				) {
					return document.getElementById("result").innerHTML;
				}
				else {
					var prod = parseFloat(a) * parseFloat(b);
					return prod.toFixed(2);
				}
			});
		}
		else if (content.includes("+")) {
			let elems = content.split("+");
			theDiv.innerHTML = elems.reduce(function (a, b) {
				if (
					a === null ||
					b === null ||
					a === "" ||
					b === "" ||
					a.match(/^[a-zA-Z]+$/) ||
					b.match(/^[a-zA-Z]+$/)
				) {
					return document.getElementById("result").innerHTML;
				}
				else {
					var sum = parseFloat(a) + parseFloat(b);
					return sum.toFixed(2);
				}
			});
		}
		else if (content.includes("-")) {
			let elems = content.split("-");
			theDiv.innerHTML = elems.reduce(function (a, b) {
				if (
					a === null ||
					b === null ||
					a === "" ||
					b === "" ||
					a.match(/^[a-zA-Z]+$/) ||
					b.match(/^[a-zA-Z]+$/)
				) {
					return document.getElementById("result").innerHTML;
				}
				else {
					var dif = parseFloat(a) - parseFloat(b);
					return dif.toFixed(2);
				}
			});
		}
		else if (content.includes("/")) {
			let elems = content.split("/");
			theDiv.innerHTML = elems.reduce(function (a, b) {
				if (parseFloat(b) === 0) {
					return (document.getElementById("result").innerHTML =
						"Cannot divide by zero");
				}
				else {
					if (
						a === null ||
						b === null ||
						a === "" ||
						b === "" ||
						a.match(/^[a-zA-Z]+$/) ||
						b.match(/^[a-zA-Z]+$/)
					) {
						return document.getElementById("result").innerHTML;
					}
					else {
						var div = parseFloat(a) / parseFloat(b);
						return div.toFixed(2);
					}
				}
			});
		}
	}

	clearall.addEventListener("click", function deleteall() {
		theDiv.innerHTML = "";
	});

	deleteone.addEventListener("click", function clearone() {
		theDiv.innerHTML = theDiv.innerHTML.slice(0, -1);
	});

	eql.addEventListener("click", equals);

	window.addEventListener("keydown", function typekeyinput(e) {
		console.log(e.key);
		var newstring = theDiv.innerHTML.substring(0, 15);
		if (!isNaN(e.key)) {
			theDiv.innerHTML = theDiv.innerHTML + e.key;
		}
		else if (
			theDiv.innerHTML[theDiv.innerHTML.length - 1].includes("+") ||
			theDiv.innerHTML[theDiv.innerHTML.length - 1].includes("-") ||
			theDiv.innerHTML[theDiv.innerHTML.length - 1].includes("/") ||
			theDiv.innerHTML[theDiv.innerHTML.length - 1].includes("x") ||
			theDiv.innerHTML[theDiv.innerHTML.length - 1].includes(".")
		) {
			if (e.key.includes("Backspace")) {
				theDiv.innerHTML = theDiv.innerHTML.slice(0, -1);
			}
			else if (e.key === "Delete") {
				theDiv.innerHTML = "";
			}
			else if (e.key === "Enter") {
				equals();
			}
			else if (e.key === "*") {
				theDiv.innerHTML = newstring.slice(0, -1) + "x";
			}
			else {
				theDiv.innerHTML = newstring.slice(0, -1) + e.key;
			}
		}
		else if (e.key === "*") {
			theDiv.innerHTML = theDiv.innerHTML + "x";
		}
		else if (e.key === "-") {
			theDiv.innerHTML = theDiv.innerHTML + "-";
		}
		else if (e.key === "+") {
			theDiv.innerHTML = theDiv.innerHTML + "+";
		}
		else if (e.key === ".") {
			theDiv.innerHTML = theDiv.innerHTML + ".";
		}
		else if (e.key === "/") {
			theDiv.innerHTML = theDiv.innerHTML + "/";
		}
		else if (e.key === "Enter") {
			equals();
		}
		else if (e.key === "=") {
			equals();
		}
		else if (e.key === "Backspace") {
			theDiv.innerHTML = theDiv.innerHTML.slice(0, -1);
		}
		else if (e.key === "Delete") {
			theDiv.innerHTML = "";
		}
	});
};
