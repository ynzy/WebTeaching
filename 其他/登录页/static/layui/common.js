$(function () {
	layui.use(['laydate', 'layer', 'element', 'layedit', 'form'], function () {
		var element = layui.element
		var laydate = layui.laydate
		var layer = layui.layer
		var layedit = layui.layedit
		var form = layui.form
		laydate.render({
			elem: '#date'
		})
	})
})
function confirm(url, msg, icon, data) {
	layer.confirm(
		msg,
		{
			icon: icon
		},
		function () {
			$.post(url, data, function (res) {
				if (res.code == 1) {
					layer.msg('操作成功', { icon: 1 })
					location.reload()
				} else {
					layer.msg('操作失败', { icon: 5 })
				}
			})
		}
	)
}
