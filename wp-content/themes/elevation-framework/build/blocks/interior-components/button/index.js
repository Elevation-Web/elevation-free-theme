(() => {
	'use strict';
	var e,
		r = {
			2030: () => {
				const e = window.wp.blocks,
					r = JSON.parse(
						'{"title":"Button","name":"elevation/interior-components--button"}'
					),
					l = window.wp.i18n,
					a = window.wp.blockEditor,
					t = window.wp.components,
					n = (e) => {
						const r = e.split('/')[1].split('--');
						return { blockId: r.join('/'), name: r[1] };
					},
					o = JSON.parse(
						'{"b":[{"label":"Primary 01","value":"primary--color-01"},{"label":"Primary 02","value":"primary--color-02"},{"label":"Primary 03","value":"primary--color-03"},{"label":"Primary 04","value":"primary--color-04"},{"label":"Primary Inverse","value":"primary--inverse"},{"label":"Secondary Outline","value":"secondary--outline"},{"label":"Secondary Inverse","value":"secondary--inverse"},{"label":"Secondary Download","value":"secondary--download"},{"label":"Tertiary","value":"tertiary--color-01"},{"label":"Tertiary Inverse","value":"tertiary--inverse"},{"label":"Fourth","value":"fourth--color-01"},{"label":"Fourth Inverse","value":"fourth--inverse"}]}'
					),
					i = window.ReactJSXRuntime,
					{ name: s, title: c } = r;
				(0, e.registerBlockType)(s, {
					title: c,
					edit: (e) => {
						const { name: s } = r,
							{ blockId: c, name: u } = n(s),
							{ attributes: v, setAttributes: b } = e,
							{
								text: d,
								url: p,
								btnStyle: h,
								ariaLabel: y,
								target: m,
							} = v,
							x = (0, a.useBlockProps)({
								className: `${u} cta cta--${h}`,
							}),
							g = Object.values(o.b).map((e) => ({
								label: (0, l.__)(e.label, 'elevation'),
								value: e.value,
							})),
							w = (0, i.jsxs)(a.InspectorControls, {
								children: [
									(0, i.jsx)(t.PanelBody, {
										title: (0, l.__)(
											'Button Styles',
											'elevation'
										),
										children: (0, i.jsx)(t.SelectControl, {
											label: (0, l.__)(
												'Button Style',
												'elevation'
											),
											value: h,
											options: g,
											onChange: (e) =>
												b({ ...v, btnStyle: e }),
										}),
									}),
									(0, i.jsx)(t.PanelBody, {
										title: (0, l.__)(
											'Button Link',
											'elevation'
										),
										children: (0, i.jsxs)(i.Fragment, {
											children: [
												p &&
													(0, i.jsx)('a', {
														href: p,
														target: '_blank',
														style: {
															display: 'block',
															marginBottom:
																'20px',
														},
														children: p,
													}),
												(0, i.jsx)('div', {
													style: {
														marginBottom: '20px',
													},
													children: (0, i.jsx)(
														a.URLInputButton,
														{
															url: p,
															placeholder: (0,
															l.__)(
																'Button URL...',
																'elevation'
															),
															onChange: (e) =>
																b({
																	...v,
																	url: e,
																}),
														}
													),
												}),
												(0, i.jsx)(t.ToggleControl, {
													label: 'Open in new tab',
													checked: m,
													onChange: (e) => {
														b({ ...v, target: e });
													},
												}),
											],
										}),
									}),
									(0, i.jsx)(t.PanelBody, {
										title: (0, l.__)(
											'Button Aria Label',
											'elevation'
										),
										children: (0, i.jsx)(
											t.__experimentalInputControl,
											{
												value: y,
												placeholder:
													'Button Aria Label...',
												onChange: (e) =>
													b({ ...v, ariaLabel: e }),
											}
										),
									}),
								],
							});
						return (0, i.jsxs)(i.Fragment, {
							children: [
								w,
								(0, i.jsx)('div', {
									...x,
									children: (0, i.jsx)(t.TextControl, {
										placeholder: (0, l.__)(
											'Button text...',
											'elevation'
										),
										value: d,
										onChange: (e) => b({ ...v, text: e }),
									}),
								}),
							],
						});
					},
					save: (e) => {
						const { name: l } = r,
							{ blockId: t, name: o } = n(l),
							{ attributes: s } = e,
							{
								text: c,
								url: u,
								btnStyle: v,
								ariaLabel: b,
								target: d,
							} = s,
							p = a.useBlockProps.save({
								className: `${o} cta cta--${v}`,
							}),
							h = b || c,
							y = d ? { target: '_blank' } : {},
							m = d ? { rel: 'noopener noreferrer' } : {};
						return (0, i.jsx)('a', {
							...p,
							href: u,
							'aria-label': h,
							...y,
							...m,
							children: c,
						});
					},
				});
			},
		},
		l = {};
	function a(e) {
		var t = l[e];
		if (void 0 !== t) return t.exports;
		var n = (l[e] = { exports: {} });
		return r[e](n, n.exports, a), n.exports;
	}
	(a.m = r),
		(e = []),
		(a.O = (r, l, t, n) => {
			if (!l) {
				var o = 1 / 0;
				for (u = 0; u < e.length; u++) {
					for (var [l, t, n] = e[u], i = !0, s = 0; s < l.length; s++)
						(!1 & n || o >= n) &&
						Object.keys(a.O).every((e) => a.O[e](l[s]))
							? l.splice(s--, 1)
							: ((i = !1), n < o && (o = n));
					if (i) {
						e.splice(u--, 1);
						var c = t();
						void 0 !== c && (r = c);
					}
				}
				return r;
			}
			n = n || 0;
			for (var u = e.length; u > 0 && e[u - 1][2] > n; u--)
				e[u] = e[u - 1];
			e[u] = [l, t, n];
		}),
		(a.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
		(() => {
			var e = { 3386: 0, 7679: 0 };
			a.O.j = (r) => 0 === e[r];
			var r = (r, l) => {
					var t,
						n,
						[o, i, s] = l,
						c = 0;
					if (o.some((r) => 0 !== e[r])) {
						for (t in i) a.o(i, t) && (a.m[t] = i[t]);
						if (s) var u = s(a);
					}
					for (r && r(l); c < o.length; c++)
						(n = o[c]), a.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
					return a.O(u);
				},
				l = (globalThis.webpackChunkelevation_framework =
					globalThis.webpackChunkelevation_framework || []);
			l.forEach(r.bind(null, 0)), (l.push = r.bind(null, l.push.bind(l)));
		})();
	var t = a.O(void 0, [7679], () => a(2030));
	t = a.O(t);
})();
