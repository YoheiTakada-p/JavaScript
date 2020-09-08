package beans;

import java.io.Serializable;

public class UserTitleBeans implements Serializable {
	private int id;
	private String title;

	public UserTitleBeans(int id, String title) {
		this.id = id;
		this.title = title;
		// TODO 自動生成されたコンストラクター・スタブ
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
}
