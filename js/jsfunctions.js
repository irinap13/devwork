window.requestAnimationFrame = window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.oRequestAnimationFrame;
var imagesNo = 0,
	images = "",
	current_index = 0;
$(window).load(function() {
	$(".bxslider").bxSlider();
	sectionSize();
	$(window).resize(function() {
			sectionSize()
	})
}), $(document).ready(function() {
	FastClick.attach(document.body);
	var n = ($(window), 0),
		e = $("#p_images").children(
			"li:not(.bx-clone)").length,
		i = $(".p_item");
	$(".nav a").on("click", function() {
		$(this).parent().children().removeClass(
			"active"), $(this).addClass(
			"animated bounceIn active").on(
			"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
			function() {
				$(this).removeClass(
					"animated bounceIn")
			})
	}), $("#panel_action").on("click",
		function() {
			$(".nav").toggleClass("open"), $(
				"#panel_action").html($(".nav")
				.hasClass("open") ?
				'<img src="images/arr_left_m.png" alt="Close menu"/> <span>Close</span>' :
				'Menu <img src="images/arr_right_m.png" alt="Open menu"/>'
			)
		}), $(".nav").each(function() {
		$(this).children().each(function() {
			$(this).on("click", function() {
				moveTo(".main", $(this).data(
					"index")), $(".nav").removeClass(
					"open"), $(
					"#panel_action").html(
					'Menu <img src="images/arr_right_m.png" alt="Open menu"/>'
				)
			})
		})
	}), $(i).mouseenter(function() {
		$(this).addClass("animated pulse")
	}).mouseleave(function() {
		$(this).removeClass(
			"animated pulse")
	}), $(i).on("click", function() {
		update_project($(this).data("pid"))
	}), $("#proj_prev").on("click",
		function() {
			0 == n ? (update_project(e - 1),
				n = e - 1) : (update_project(n -
				1), n--)
		}), $("#proj_next").on("click",
		function() {
			e == n + 1 ? (update_project(0),
				n = 0) : (update_project(n + 1),
				n++)
		}), $("#proj_close").on("click",
		function() {
			$("#project_view").animate({
				opacity: 0,
				width: "1px",
				height: "1px",
				left: "50%",
				top: "50%"
			}, 300), setTimeout(function() {
				$("#project_view").css(
					"display", "none")
			}, 300)
		}), $(window).scroll(function() {
		$(".page1:in-viewport(10)").run(
				function() {
					$(".nav").children().removeClass(
						"active"), $(
						".nav a:first-child").addClass(
						"active")
				}), $(".page2:in-viewport(10)")
			.run(function() {
				$(".nav").children().removeClass(
					"active"), $(
					".nav a:nth-child(2)").addClass(
					"active")
			}), $(".page3:in-viewport(100)")
			.run(function() {
				$(".nav").children().removeClass(
					"active"), $(
					".nav a:nth-child(3)").addClass(
					"active"), setTimeout(function() {
					$(
						"#timeline .time_item:nth-child(2)"
					).addClass(
						"animated zoomInDown")
				}, 200), setTimeout(function() {
					$(
						"#timeline .time_item:nth-child(3)"
					).addClass(
						"animated zoomInUp")
				}, 400), setTimeout(function() {
					$(
						"#timeline .time_item:nth-child(4)"
					).addClass(
						"animated zoomInDown")
				}, 600), setTimeout(function() {
					$(
						"#timeline .time_item:nth-child(5)"
					).addClass(
						"animated zoomInUp")
				}, 800)
			}), $(".page4:in-viewport(100)")
			.run(function() {
				$(".nav").children().removeClass(
					"active"), $(
					".nav a:nth-child(4)").addClass(
					"active")
			})
	})
});
function update_project(n) {
	current_index = n, $("#project_view")
		.css("display", "block").animate({
			opacity: 1,
			width: "100%",
			height: "100%",
			left: 0,
			top: 0
		}, 300);
	var e = $("li[data-set='" +
		current_index + "']");
	$("#proj_title").html(e.find(
			"span.proj_title").html()), $(
			"#proj_desc").html(e.find(
			"span.proj_desc").html()), $(".set")
		.css("display", "none");
	var i = $(".set[data-setid='" +
		current_index + "']");
	$(i).css("display", "block")
}

function sectionSize() {
	$(".main > div").css("height", $(
		window).height() + "px")
}